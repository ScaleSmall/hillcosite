#!/bin/bash
# 5xx Error Diagnostic Curl Commands
# Run this script to diagnose GSC 5xx errors for hillcopaint.com
# Generated: February 12, 2026

echo "=================================="
echo "5xx Error Diagnostic Test Suite"
echo "Domain: hillcopaint.com"
echo "=================================="
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Identify Hosting Platform
echo "Test 1: Identify Hosting Platform"
echo "-----------------------------------"
server_header=$(curl -I -s https://www.hillcopaint.com/ 2>&1 | grep -i "server:" | awk '{print $2}')
if [[ "$server_header" == *"Netlify"* ]]; then
    echo -e "${GREEN}✓ Hosting Platform: Netlify${NC}"
    echo "  → Use Netlify-specific fixes"
elif [[ "$server_header" == *"Apache"* ]] || [[ "$server_header" == *"LiteSpeed"* ]]; then
    echo -e "${GREEN}✓ Hosting Platform: Apache/SiteGround${NC}"
    echo "  → Use Apache-specific fixes"
else
    echo -e "${YELLOW}⚠ Server Header: $server_header${NC}"
    echo "  → Manual verification needed"
fi
echo ""

# Test 2: Homepage Status
echo "Test 2: Homepage Status"
echo "-----------------------------------"
status=$(curl -I -s https://www.hillcopaint.com/ 2>&1 | grep "HTTP" | awk '{print $2}')
if [[ "$status" == "200" ]]; then
    echo -e "${GREEN}✓ Homepage: 200 OK${NC}"
elif [[ "$status" =~ ^5 ]]; then
    echo -e "${RED}✗ Homepage: $status (Server Error)${NC}"
else
    echo -e "${YELLOW}⚠ Homepage: $status${NC}"
fi
echo ""

# Test 3: Sitemap Status (Common 500 Error Source)
echo "Test 3: Sitemap Status"
echo "-----------------------------------"
status=$(curl -I -s https://www.hillcopaint.com/sitemap.xml 2>&1 | grep "HTTP" | awk '{print $2}')
content_type=$(curl -I -s https://www.hillcopaint.com/sitemap.xml 2>&1 | grep -i "content-type:" | cut -d' ' -f2-)
if [[ "$status" == "200" ]] && [[ "$content_type" == *"xml"* ]]; then
    echo -e "${GREEN}✓ Sitemap: 200 OK (XML)${NC}"
elif [[ "$status" =~ ^5 ]]; then
    echo -e "${RED}✗ Sitemap: $status (Server Error)${NC}"
    echo -e "${RED}  → Check .htaccess sitemap.php rewrite rule${NC}"
else
    echo -e "${YELLOW}⚠ Sitemap: $status${NC}"
    echo "  Content-Type: $content_type"
fi
echo ""

# Test 4: GSC Affected URLs
echo "Test 4: GSC Affected URLs Status"
echo "-----------------------------------"
affected_urls=(
  "https://www.hillcopaint.com/gallery"
  "https://www.hillcopaint.com/pre-approval"
  "https://www.hillcopaint.com/testimonials"
  "https://www.hillcopaint.com/faq"
  "https://www.hillcopaint.com/services"
  "https://www.hillcopaint.com/services/commercial"
)

error_count=0
for url in "${affected_urls[@]}"; do
  status=$(curl -I -s "$url" 2>&1 | grep "HTTP" | awk '{print $2}')
  if [[ "$status" == "200" ]]; then
    echo -e "${GREEN}✓${NC} $url : $status"
  elif [[ "$status" =~ ^5 ]]; then
    echo -e "${RED}✗${NC} $url : $status"
    ((error_count++))
  else
    echo -e "${YELLOW}⚠${NC} $url : $status"
  fi
done

echo ""
if [[ $error_count -eq 0 ]]; then
    echo -e "${GREEN}✓ All tested URLs are healthy${NC}"
else
    echo -e "${RED}✗ Found $error_count URLs with 5xx errors${NC}"
fi
echo ""

# Test 5: Protocol & Host Redirects
echo "Test 5: Protocol & Host Redirects"
echo "-----------------------------------"

# Test 5a: http → https
echo "5a. Testing http://hillcopaint.com/"
location=$(curl -I -s http://hillcopaint.com/ 2>&1 | grep -i "location:" | awk '{print $2}' | tr -d '\r')
status=$(curl -I -s http://hillcopaint.com/ 2>&1 | grep "HTTP" | awk '{print $2}')
if [[ "$status" == "301" ]] && [[ "$location" == *"https://www.hillcopaint.com"* ]]; then
    echo -e "${GREEN}✓ HTTP redirect: 301 → $location${NC}"
else
    echo -e "${RED}✗ HTTP redirect: $status → $location${NC}"
fi

# Test 5b: non-www → www
echo "5b. Testing https://hillcopaint.com/"
location=$(curl -I -s https://hillcopaint.com/ 2>&1 | grep -i "location:" | awk '{print $2}' | tr -d '\r')
status=$(curl -I -s https://hillcopaint.com/ 2>&1 | grep "HTTP" | awk '{print $2}')
if [[ "$status" == "301" ]] && [[ "$location" == *"https://www.hillcopaint.com"* ]]; then
    echo -e "${GREEN}✓ WWW redirect: 301 → $location${NC}"
elif [[ "$status" == "200" ]]; then
    echo -e "${YELLOW}⚠ Non-www serving directly (should redirect to www)${NC}"
else
    echo -e "${RED}✗ WWW redirect: $status → $location${NC}"
fi

# Test 5c: Canonical (should NOT redirect)
echo "5c. Testing https://www.hillcopaint.com/"
status=$(curl -I -s https://www.hillcopaint.com/ 2>&1 | grep "HTTP" | awk '{print $2}')
if [[ "$status" == "200" ]]; then
    echo -e "${GREEN}✓ Canonical URL: 200 OK (no redirect)${NC}"
else
    echo -e "${RED}✗ Canonical URL: $status${NC}"
fi
echo ""

# Test 6: Googlebot User-Agent
echo "Test 6: Googlebot Access Test"
echo "-----------------------------------"
status_normal=$(curl -I -s https://www.hillcopaint.com/ 2>&1 | grep "HTTP" | awk '{print $2}')
status_bot=$(curl -I -s -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" https://www.hillcopaint.com/ 2>&1 | grep "HTTP" | awk '{print $2}')

echo "Normal User-Agent: $status_normal"
echo "Googlebot User-Agent: $status_bot"

if [[ "$status_normal" == "200" ]] && [[ "$status_bot" == "200" ]]; then
    echo -e "${GREEN}✓ Googlebot can access site${NC}"
elif [[ "$status_bot" == "403" ]] || [[ "$status_bot" == "503" ]]; then
    echo -e "${RED}✗ Googlebot is blocked (Status: $status_bot)${NC}"
    echo -e "${RED}  → Check security settings and whitelist Googlebot${NC}"
else
    echo -e "${YELLOW}⚠ Different responses: Normal=$status_normal, Bot=$status_bot${NC}"
fi
echo ""

# Test 7: Supabase Connectivity
echo "Test 7: Supabase Backend Status"
echo "-----------------------------------"
status=$(curl -I -s https://jsliktxrbzwhxrtcyoxv.supabase.co/rest/v1/ 2>&1 | grep "HTTP" | awk '{print $2}')
if [[ "$status" == "200" ]]; then
    echo -e "${GREEN}✓ Supabase: 200 OK${NC}"
elif [[ "$status" =~ ^5 ]]; then
    echo -e "${RED}✗ Supabase: $status (Backend Error)${NC}"
    echo -e "${RED}  → Check Supabase status: https://status.supabase.com/${NC}"
else
    echo -e "${YELLOW}⚠ Supabase: $status${NC}"
fi
echo ""

# Test 8: Check for Redirect Loops
echo "Test 8: Redirect Loop Detection"
echo "-----------------------------------"
redirect_count=$(curl -I -L -s http://hillcopaint.com/ 2>&1 | grep -c "HTTP")
final_status=$(curl -I -L -s http://hillcopaint.com/ 2>&1 | grep "HTTP" | tail -1 | awk '{print $2}')

echo "Total redirects from http://hillcopaint.com/: $redirect_count"
echo "Final status: $final_status"

if [[ $redirect_count -le 3 ]] && [[ "$final_status" == "200" ]]; then
    echo -e "${GREEN}✓ No redirect loops detected${NC}"
elif [[ $redirect_count -gt 10 ]]; then
    echo -e "${RED}✗ Possible redirect loop ($redirect_count hops)${NC}"
    echo -e "${RED}  → Check conflicting redirect rules${NC}"
else
    echo -e "${YELLOW}⚠ Multiple redirects ($redirect_count hops)${NC}"
    echo "  → Consider simplifying redirect chain"
fi
echo ""

# Test 9: Response Time
echo "Test 9: Response Time Analysis"
echo "-----------------------------------"
time_total=$(curl -w "%{time_total}" -o /dev/null -s https://www.hillcopaint.com/)
time_ms=$(echo "$time_total * 1000" | bc | cut -d'.' -f1)

echo "Homepage load time: ${time_ms}ms"

if [[ $time_ms -lt 2000 ]]; then
    echo -e "${GREEN}✓ Response time is healthy (<2s)${NC}"
elif [[ $time_ms -lt 5000 ]]; then
    echo -e "${YELLOW}⚠ Response time is slow (2-5s)${NC}"
else
    echo -e "${RED}✗ Response time is critical (>5s)${NC}"
    echo -e "${RED}  → Check server resources and optimization${NC}"
fi
echo ""

# Summary
echo "=================================="
echo "Summary & Next Steps"
echo "=================================="
echo ""
echo "Based on the test results above:"
echo ""
echo "1. If you see 5xx errors:"
echo "   - Review error logs on your hosting platform"
echo "   - Apply fixes from 5XX_QUICK_DIAGNOSIS_CHECKLIST.md"
echo "   - Re-run this script after fixes"
echo ""
echo "2. If Googlebot is blocked:"
echo "   - Check security settings (WAF, bot blocking)"
echo "   - Whitelist Googlebot user-agents"
echo ""
echo "3. If redirects are failing:"
echo "   - Verify redirect rules in .htaccess or _redirects"
echo "   - Remove conflicting redirect configurations"
echo ""
echo "4. If Supabase is down:"
echo "   - Check https://status.supabase.com/"
echo "   - Verify env.js has correct credentials"
echo ""
echo "5. If all tests pass:"
echo "   - Wait 48 hours for propagation"
echo "   - Request Google re-crawl in Search Console"
echo "   - Monitor GSC for 5xx error reduction"
echo ""
echo "For detailed analysis, see:"
echo "  → 5XX_ERROR_ROOT_CAUSE_ANALYSIS.md"
echo "  → 5XX_QUICK_DIAGNOSIS_CHECKLIST.md"
echo ""
echo "Test completed at: $(date)"
echo "=================================="
