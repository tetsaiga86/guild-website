import AdminLanding from '../client/components/adminLanding'
import Header from '../client/components/header'
import React from 'react'
import sinon from 'sinon'
import EditAnnouncements from '../client/components/editAnnouncements'
import EditRecruitList from '../client/components/editRecruitList'
import {mount} from 'enzyme'
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';
import TestUtils from 'react-addons-test-utils';

function wrapInTestContext(DecoratedComponent) {
  return DragDropContext(TestBackend)(
    class TestContextContainer extends React.Component {
      render() {
        return <DecoratedComponent {...this.props} />;
      }
    }
  );
}

const TestAdminLanding = wrapInTestContext(AdminLanding);
global.ENV = {"membership_level": 1}
const component = mount(
  <TestAdminLanding />
)

test('renders an <EditAnnouncements/> component', () => {
  expect(component.find(EditAnnouncements).exists()).toBe(true)
})

test('renders an <EditRecruitList /> component', () => {
  expect(component.find(EditRecruitList).exists()).toBe(true)
})
