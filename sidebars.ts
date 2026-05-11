import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'SDK',
      link: {
        type: 'doc',
        id: 'sdk/README',
      },
      items: [
        'sdk/README',
        'sdk/scopes/accounts',
        'sdk/scopes/assets',
        'sdk/scopes/customers',
        'sdk/scopes/quote',
        'sdk/scopes/transactions',
        'sdk/scopes/tracker',
      ],
    },
    {
      type: 'category',
      label: 'Link',
      link: {
        type: 'doc',
        id: 'link/index',
      },
      items: [
        'link/index',
        'link/services/index',
        {
          type: 'category',
          label: 'Core',
          link: {
            type: 'doc',
            id: 'link/services/core/index',
          },
          items: [
            'link/services/core/index',
            {
              type: 'category',
              label: 'API Reference',
              link: {
                type: 'generated-index',
                slug: '/link/services/core/api-reference',
              },
              items: [
                'link/services/core/api-reference/transactions',
                'link/services/core/api-reference/balances',
                'link/services/core/api-reference/assets',
              ],
            },
            'link/services/core/error-handling',
          ],
        },
        {
          type: 'category',
          label: 'Account Manager',
          link: {
            type: 'doc',
            id: 'link/services/account_manager/index',
          },
          items: [
            'link/services/account_manager/index',
            {
              type: 'category',
              label: 'API Reference',
              link: {
                type: 'generated-index',
                slug: '/link/services/account_manager/api-reference',
              },
              items: [
                'link/services/account_manager/api-reference/participant-service',
                'link/services/account_manager/api-reference/customer-service',
                'link/services/account_manager/api-reference/account-service',
                'link/services/account_manager/api-reference/wallet-service',
              ],
            },
            'link/services/account_manager/error-handling',
          ],
        },
        {
          type: 'category',
          label: 'Quote',
          link: {
            type: 'doc',
            id: 'link/services/quote/index',
          },
          items: [
            'link/services/quote/index',
            {
              type: 'category',
              label: 'API Reference',
              link: {
                type: 'generated-index',
                slug: '/link/services/quote/api-reference',
              },
              items: [
                'link/services/quote/api-reference/rates',
                'link/services/quote/api-reference/assets',
                'link/services/quote/api-reference/categories',
                'link/services/quote/api-reference/providers',
                'link/services/quote/api-reference/mappings',
              ],
            },
            'link/services/quote/error-handling',
          ],
        },
        {
          type: 'category',
          label: 'Router',
          link: {
            type: 'doc',
            id: 'link/services/router/index',
          },
          items: [
            'link/services/router/index',
            {
              type: 'category',
              label: 'API Reference',
              link: {
                type: 'generated-index',
                slug: '/link/services/router/api-reference',
              },
              items: [
                'link/services/router/api-reference/account-service',
                'link/services/router/api-reference/customer-service',
                'link/services/router/api-reference/message-service',
              ],
            },
            'link/services/router/error-handling',
          ],
        },
        {
          type: 'category',
          label: 'Tracker',
          link: {
            type: 'doc',
            id: 'link/services/tracker/index',
          },
          items: [
            'link/services/tracker/index',
            {
              type: 'category',
              label: 'API Reference',
              link: {
                type: 'generated-index',
                slug: '/link/services/tracker/api-reference',
              },
              items: ['link/services/tracker/api-reference/log-messages'],
            },
            'link/services/tracker/error-handling',
          ],
        },
        {
          type: 'category',
          label: 'Verify',
          link: {
            type: 'doc',
            id: 'link/services/verify/index',
          },
          items: [
            'link/services/verify/index',
            {
              type: 'category',
              label: 'API Reference',
              link: {
                type: 'generated-index',
                slug: '/link/services/verify/api-reference',
              },
              items: ['link/services/verify/api-reference/sanctions-service'],
            },
            'link/services/verify/error-handling',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Rails',
      link: {
        type: 'doc',
        id: 'rails/index',
      },
      items: [
        'rails/index',
        {
          type: 'autogenerated',
          dirName: 'rails/services',
        },
        'rails/gate',
      ],
    },
    {
      type: 'category',
      label: 'Engine',
      link: {
        type: 'doc',
        id: 'engine/index',
      },
      items: ['engine/index'],
    },
  ],
};

export default sidebars;
