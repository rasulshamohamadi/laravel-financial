export default [
    {
        _name: 'CSidebarNav',
        _children: [
            {
                _name: 'CSidebarNavItem',
                name: $t('test'),//'Test',//i18n.t('firefly.welcome_back')
                to: '/dashboard',
                icon: 'cil-speedometer'
            },
            {
                _name: 'CSidebarNavTitle',
                _children: ['Financial control']
            },
            // top 3 things
            {
                _name: 'CSidebarNavItem',
                name: 'Budgets',
                to: '/charts',
                icon: 'cil-chart-pie'
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Bills',
                to: '/charts',
                icon: 'cil-chart-pie'
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Piggy banks',
                to: '/charts',
                icon: 'cil-chart-pie'
            },
            // menu for transactions
            {
                _name: 'CSidebarNavDropdown',
                name: 'Transactions',
                route: '/base',
                icon: 'cil-puzzle',
                items: [
                    {
                        name: 'Expenses',
                        to: '/base/breadcrumbs'
                    },
                    {
                        name: 'Revenue & income',
                        to: '/base/cards'
                    },
                    {
                        name: 'Transfers',
                        to: '/base/carousels'
                    },
                ]
            },

            // menu for accounts
            {
                _name: 'CSidebarNavDropdown',
                name: 'Accounts',
                route: '/base',
                icon: 'cil-puzzle',
                items: [
                    {
                        name: 'Asset accounts',
                        to: '/base/breadcrumbs'
                    },
                    {
                        name: 'Expense accounts',
                        to: '/base/cards'
                    },
                    {
                        name: 'Revenue accounts',
                        to: '/base/cards'
                    },
                    {
                        name: 'Liabilities',
                        to: '/base/cards'
                    },
                ]
            },

            // classification
            {
                _name: 'CSidebarNavDropdown',
                name: 'Classification',
                route: '/base',
                icon: 'cil-puzzle',
                items: [
                    {
                        name: 'Categories',
                        to: '/base/breadcrumbs'
                    },
                    {
                        name: 'Tags',
                        to: '/base/cards'
                    },
                ]
            },

            // menu for automation
            {
                _name: 'CSidebarNavDropdown',
                name: 'Automation',
                route: '/base',
                icon: 'cil-puzzle',
                items: [
                    {
                        name: 'Recurring transactions',
                        to: '/base/breadcrumbs'
                    },
                    {
                        name: 'Rules',
                        to: '/base/cards'
                    },
                ]
            },


            // menu for tools
            {
                _name: 'CSidebarNavDropdown',
                name: 'Tools',
                route: '/base',
                icon: 'cil-puzzle',
                items: [
                    {
                        name: 'Export data',
                        to: '/base/cards'
                    },
                ]
            },

            // reports
            {
                _name: 'CSidebarNavItem',
                name: 'Reports',
                to: '/charts',
                icon: 'cil-chart-pie'
            },
        ]
    }
]
