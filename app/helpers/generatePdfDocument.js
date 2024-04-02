import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
// import PdfDocument from '../PdfDocument';
import HtmlToPdf from './htmlToPdf';

const generatePdfDocument = async (power, power2, fan, rackmount, ciscopn) => {
        const blob = await pdf((
            <HtmlToPdf
                power={power}
                power2={power2}
                fan={fan}
                rackmount={rackmount}
                ciscopn={ciscopn}

            />
        )).toBlob();
        saveAs(blob, 'ListOfMaterials.pdf');
};

export default generatePdfDocument;