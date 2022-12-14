export class Content {
  private readonly content: string;

  constructor(content: string) {
    const isContentLengthValida = this.validateContentLength(content);

    if (!isContentLengthValida) {
      throw new Error('Content length error.');
    }
    
    this.content = content;
  }

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length > 6 && content.length <= 240;
  }
}
