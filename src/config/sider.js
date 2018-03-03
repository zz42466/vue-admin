export default [
  {
    'name': 'Option 1',
    'icon': 'el-icon-time',
    'link': '/test1',
    'subMenu': []
  },
  {
    'name': 'Option 2',
    'icon': 'el-icon-mobile-phone',
    'subMenu': [
      {
        'name': 'Tom',
        'link': '/test2',
        'subMenu': [

        ]
      },
      {
        'name': 'Bill',
        'link': '/login',
        'subMenu': []
      },
      {
        'name': 'Alex',
        'link': '#',
        'subMenu': []
      }
    ]
  },
  {
    'name': 'Team',
    'icon': 'el-icon-service',
    'subMenu': [
      {
        'name': 'Team1',
        'link': '#',
        'subMenu': []
      },
      {
        'name': 'Team2',
        'link': '#',
        'icon': 'el-icon-goods',
        'subMenu': [
          {
            'name': 'Team1',
            'link': '#',
            'subMenu': []
          },
          {
            'name': 'Team2',
            'link': '#',
            'subMenu': []
          }
        ]
      }
    ]
  },
  {
    'name': 'File',
    'icon': 'el-icon-location',
    'link': '#',
    'subMenu': []
  }
];