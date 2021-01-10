import { makeObservable, observable, action, runInAction } from 'mobx';

import { CatFactsService } from 'store/actions/catFacts';

export class CatFactsStore {
  status = 'initial';

  facts: Array<{ user: string; text: string }> = [];

  catFactsService;

  constructor() {
    makeObservable(this, {
      status: observable,
      facts: observable,
      getCatFactsAsync: action,
    });
    this.catFactsService = new CatFactsService();
  }

  getCatFactsAsync = async (): Promise<void> => {
    try {
      const response = await this.catFactsService.get();
      runInAction(() => {
        this.facts = response.data as [];
      });
    } catch (error) {
      runInAction(() => {
        this.status = 'error';
      });
    }
  };
}
