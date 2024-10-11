interface FormField {
    [key: string]: string;
}

abstract class form {
    fields: FormField[];
    pdfOutput: any;
    stepPages: any[] = [];

    constructor(fields: FormField[], pdfOutput: any) {
        this.fields = fields;
        this.pdfOutput = pdfOutput;
    }

    abstract renderForm(): void;
    abstract generatePdf(): void;
}

export default form;