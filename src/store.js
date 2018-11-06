import { observable, action } from 'mobx';

class MainStore {
  @observable currentViewName = 'list';

  @observable rocketFilter = null;

  @action
  switchView = (viewName) => {
    this.currentViewName = viewName;
  }

  @action
  setFilter = (filterName) => {
    this.rocketFilter = filterName;
  }
}

const instance = new MainStore();
export default instance;
