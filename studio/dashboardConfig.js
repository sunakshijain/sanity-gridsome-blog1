export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e43a5d4406caf6aa69f6b8d',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog1-studio-1rsiiwaa',
                  apiId: 'dce14128-26ba-4a1a-a3ed-39a733f3aa47'
                },
                {
                  buildHookId: '5e43a5d45e15000d3a18f37d',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog1-web',
                  apiId: '21318d1b-6695-4177-aea6-785bb63634a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sunakshijain/sanity-gridsome-blog1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog1-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
