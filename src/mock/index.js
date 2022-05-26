import Mock from 'mockjs';
import Test from './test';

Mock.mock('/api/tests', Test.method, () => {
  return Test.tests;
});
