import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.
 
 Create as many sidebars as you want.
 */

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  home: [
    { type: 'doc', label: 'Get started', id: 'home/get-started' },
    {
      type: 'html',
      value:
        '<div style="font-weight: bold; margin-left:10px; margin-top: 10px;">Fundamentals</div>', // This adds a labeled divider
    },

    {
      type: 'category',
      label: 'Introduction',
      link: { type: 'doc', id: 'home/fundamentals/introduction/introduction' },
      items: [
        'home/fundamentals/introduction/intents',
        'home/fundamentals/introduction/solvers',
        'home/fundamentals/introduction/stakers',
        'home/fundamentals/introduction/auctions',
        'home/fundamentals/introduction/atomic-swaps',
      ],
    },
    {
      type: 'category',
      label: 'How it works',
      link: { type: 'doc', id: 'home/fundamentals/how-it-works/how-it-works' },
      items: [
        'home/fundamentals/how-it-works/intent-flow',
        'home/fundamentals/how-it-works/cross-chain-coincidence-of-wants-xcow',
      ],
    },
    {
      type: 'category',
      label: 'Benefits',
      link: { type: 'doc', id: 'home/fundamentals/benefits/benefits' },
      items: [
        'home/fundamentals/benefits/cross-chain-intents',
        'home/fundamentals/benefits/free-option-protection',
        'home/fundamentals/benefits/better-price',
        'home/fundamentals/benefits/no-custody-risk',
      ],
    },
    {
      type: 'html',
      value:
        '<div style="font-weight: bold; margin-left:10px; margin-top: 10px;">Guides</div>', // This adds a labeled divider
    },
    {
      type: 'category',
      label: 'Swap',
      link: { type: 'doc', id: 'home/basics/guides/swap/swap' },

      items: [
        'home/basics/guides/swap/btc-wbtc',
        'home/basics/guides/swap/wbtc-btc',
        'home/basics/guides/swap/wbtc-wbtc',
        'home/basics/guides/swap/btc-ibtc',
        'home/basics/guides/swap/ibtc-btc',
        'home/basics/guides/swap/btc-swbtc',
        'home/basics/guides/swap/swbtc-btc',
      ],
    },
    {
      type: 'category',
      label: 'Stake',
      link: { type: 'doc', id: 'home/basics/guides/stake/stake-seed' },

      items: [],
    },
    {
      type: 'html',
      value:
        '<div style="font-weight: bold; margin-left:10px; margin-top: 10px;">Governance</div>', // This adds a labeled divider
    },
    { type: 'doc', label: 'Tokenomics', id: 'home/governance/tokenomics' },
    {
      type: 'doc',
      label: 'Governance process',
      id: 'home/governance/governance-process',
    },
    { type: 'doc', label: 'Snapshot', id: 'home/governance/snapshot' },
    { type: 'doc', label: 'Brand guide', id: 'home/garden-brand-guide' },
  ],

  developers: [
    'developers/overview',
    {
      type: 'category',
      label: 'Core',
      link: {
        type: 'doc',
        id: 'developers/core/core',
      },
      items: [
        'developers/core/order-lifecycle',
        'developers/core/sessions',
        'developers/core/auth',
      ],
    },
    'developers/api/garden-api',
    {
      type: 'category',
      label: 'SDK',
      link: { type: 'doc', id: 'developers/sdk/sdk' },
      items: [
        {
          type: 'category',
          label: 'Classes',
          link: {
            type: 'doc',
            id: 'developers/sdk/classes/quote',
          },
          items: [
            'developers/sdk/classes/quote',
            'developers/sdk/classes/orderbook',
            'developers/sdk/classes/secret-manager',
          ],
        },
        {
          type: 'category',
          label: 'Types',
          link: {
            type: 'doc',
            id: 'developers/sdk/types/types',
          },
          items: [
            'developers/sdk/types/async-result',
            'developers/sdk/types/IQuote',
            'developers/sdk/types/IOrderbook',
            'developers/sdk/types/ISecretManager',
            'developers/sdk/types/create-order',
          ],
        },
        {
          type: 'category',
          label: 'React',
          link: {
            type: 'doc',
            id: 'developers/sdk/react/react',
          },
          items: [
            'developers/sdk/react/quickstart',
            'developers/sdk/react/hooks',
            'developers/sdk/react/create-order',
            'developers/sdk/react/settle-order',
            'developers/sdk/react/get-order',
          ],
        },
        {
          type: 'category',
          label: 'Node.js',
          link: {
            type: 'doc',
            id: 'developers/sdk/nodejs/nodejs',
          },
          items: [
            'developers/sdk/nodejs/quickstart',
            'developers/sdk/nodejs/create-order',
            'developers/sdk/nodejs/settle-order',
            'developers/sdk/nodejs/get-order',
          ],
        },
      ],
    },
    'developers/supported-chains',
    'developers/testing/testing',
    'developers/troubleshooting',

    {
      type: 'category',
      label: 'Cookbook',
      link: { type: 'doc', id: 'developers/cookbook/cookbook' },
      items: [],
    },
  ],
};

export default sidebars;
