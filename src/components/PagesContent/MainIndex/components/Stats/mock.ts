interface IMock {
   value: string,
   description: string,
   size: number | 'grow' | 'auto',
   linkText?: string
}

export const mock: IMock[] = [
   {
      value: '150+',
      description: 'stats.volunteers',
      size: 2,
      linkText: 'stats.linkTextJoin'
   },
   {
      value: '30',
      description: 'stats.partnerCompanies',
      size: 2,
      linkText: 'stats.linkTextBecomePartner'
   },
   {
      value: '$300K',
      description: 'stats.partnersTechnologies',
      size: 'grow',
      linkText: 'stats.linkTextLearnMore'
   },
   {
      value: '9',
      description: 'stats.ambassadors',
      size: 2,
   },
   {
      value: '5',
      description: 'stats.friendlyFounds',
      size: 2,
   },
]
