export const trustMetrics = {
  jobCountMinimum: 350,
  timeframeMonthsMinimum: 24,
  serviceAreaLabel: 'Greater Austin',

  variants: [
    '{jobCount}+ projects in the last {months} months across {area}',
    '{jobCount}+ local jobs completed over the last {months} months',
    '{jobCount}+ homes refreshed in {area} in the last {months} months',
    'At least {jobCount}+ completed projects in {area} (last {months} months)',
    '{jobCount}+ properties painted in {area} over {months} months',
    '{jobCount}+ successful projects delivered across {area} ({months} months)'
  ]
} as const;
