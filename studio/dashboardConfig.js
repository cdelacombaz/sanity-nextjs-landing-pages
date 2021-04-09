export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6070b3a798364145e5e723fa',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3y7vncgz',
                  apiId: '16431d5b-e250-4618-9b85-47d7acffac05'
                },
                {
                  buildHookId: '6070b3a7c2304053096ae4c8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pqqkspzr',
                  apiId: '1258a67d-218f-4f78-8e91-f970529ced70'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cdelacombaz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pqqkspzr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
