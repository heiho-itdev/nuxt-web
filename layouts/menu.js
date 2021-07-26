//メニューに表示する項目定義
export default {
  items: [
    {
      name: 'Dashboard',
      url: '/',
      icon: 'icon-speedometer'
    },
    // {
    //   name: 'ITC部管理',
    //   url: '/itcMng',
    //   icon: 'icon-people',
    //   children: [
    //     {
    //       name: 'メンバー管理',
    //       url: '/itcMng/employeeMng'
    //     },
    //     {
    //       name: '月報管理',
    //       url: '/itcMng/reportMng'
    //     },
    //     {
    //       name: '活動履歴',
    //       url: '/itcMng/activityHistory'
    //     },
    //     {
    //       name: '採用管理',
    //       url: '/itcMng/recruitmentMng'
    //     }
    //   ]
    // },
    {
      name: '受注管理',
      url: '/linenMng/order',
      icon: 'icon-people',
      children: [
        {
          name: '受注一覧',
          url: '/linenMng/order'
        },
        {
          name: '受注登録',
          url: '/linenMng/order/create'
        },
        {
          name: 'バーコード検収',
          url: '/linenMng/order/code'
        }
      ]
    },
    {
      name: '返品管理',
      url: '/linenMng/delivery',
      icon: 'icon-people',
      children: [
        {
          name: '返品一覧',
          url: '/linenMng/delivery'
        },
        {
          name: '返品登録',
          url: '/linenMng/delivery/create'
        }
      ]
    },
    {
      name: '在庫管理',
      url: '/linenMng/stock',
      icon: 'icon-people',
      children: [
        {
          name: '在庫一覧/出荷管理',
          url: '/linenMng/stock'
        },
        {
          name: 'RFID連携',
          url: '/linenMng/stock/rfid'
        },
        {
          name: '棚卸',
          url: '/linenMng/stock/'
        }
      ]
    },
    {
      name: 'EPCコード管理',
      url: '/linenMng/epc',
      icon: 'icon-people',
      children: [
        {
          name: 'EPCコード一覧',
          url: '/linenMng/epc'
        }
      ]
    },
    {
      name: '請求管理',
      url: '/linenMng/billing',
      icon: 'icon-people',
      children: [
        {
          name: '請求一覧',
          url: '/linenMng/billing'
        },
        {
          name: '売上管理',
          url: '/linenMng/sales'
        }
      ]
    },
    {
      name: 'マスタ管理',
      url: '/linenMng/master',
      icon: 'icon-people',
      children: [
        {
          name: 'マスタ一覧',
          url: '/linenMng/delivery'
        }
      ]
    },
    {
      name: 'その他',
      url: '/linenMng/other',
      icon: 'icon-people',
      children: [
        {
          name: '問い合わせ一覧',
          url: '/linenMng/delivery'
        },
        {
          name: 'アカウント管理',
          url: '/linenMng/other/account'
        },
        {
          name: '権限管理',
          url: '/linenMng/delivery'
        },
        {
          name: '操作ログ',
          url: '/linenMng/delivery'
        }
      ]
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/pages/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/pages/500',
          icon: 'icon-star'
        }
      ]
    }
  ]
}
