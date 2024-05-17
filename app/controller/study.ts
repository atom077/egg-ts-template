import { Controller } from 'egg';

export default class StudyController extends Controller {
  public async addStudyBook() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const { book_id, name } = ctx.request.body;
    await ctx.service.study.addStudyBook('atom', book_id, name);
  }

}
