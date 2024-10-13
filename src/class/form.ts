interface FormField {
    [key: string]: string;
}
abstract class form {
    fields: FormField[];
    pdfOutput: unknown;
    stepPages: unknown[] = [];
    constructor(fields: FormField[], pdfOutput: unknown) {
        this.fields = fields;
        this.pdfOutput = pdfOutput;
    }
    abstract renderForm(): void;
    abstract generatePdf(): void;
}
export default form;