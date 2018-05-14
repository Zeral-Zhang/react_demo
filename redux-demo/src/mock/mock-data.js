import Mock from 'mockjs';

Mock.mock( '/api/dashboard', 'GET', {
  'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }]
} );