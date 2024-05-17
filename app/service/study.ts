import { Service } from 'egg';

export default class StudyService extends Service {
  public async addStudyBook(uid: string, bookId: string, name: string) {
    await this.ctx.model.StudyBook.create({
      creator: uid,
      book_id: bookId,
      name,
    });
  }

}
