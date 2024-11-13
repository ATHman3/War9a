const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');

async function fillPdf() {
    try {


        // Load the PDF document
        const existingPdfBytes = fs.readFileSync('a.pdf');
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        // Register fontkit for Unicode support
        pdfDoc.registerFontkit(fontkit);

        // Use Arial or another system font that supports Unicode
        const fontBytes = fs.readFileSync('arial.ttf');
        const customFont = await pdfDoc.embedFont(fontBytes, {
            subset: true,
            unicode: true  // Enable Unicode support
        });

        // Get the form and field
        const form = pdfDoc.getForm();
        const emailField = form.getTextField('email');

        // Set text with Unicode characters
        emailField.setText(' برامج التصميم with Unicode: ŪЬȕǹƚü');

        // Update appearances with the Unicode-enabled font
        form.updateFieldAppearances(customFont);

        form.flatten();

        // Save the PDF
        const pdfBytes = await pdfDoc.save();
        fs.writeFileSync('filled_a.pdf', pdfBytes);

        return 'PDF filled successfully!';
    } catch (error) {
        console.error('Full error:', error);
        throw new Error(`Failed to fill PDF: ${error.message}`);
    }
}

fillPdf()
    .then(console.log)
    .catch(error => {
        console.error('Detailed error:', error);
        if (error.stack) {
            console.error('Stack trace:', error.stack);
        }
    });