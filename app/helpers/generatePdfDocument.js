import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
// import PdfDocument from '../PdfDocument';
import HtmlToPdf from './htmlToPDF';

const generatePdfDocument = async (power, power2, fan, rackmount, ciscopn, descriprion, wiight, dims) => {
        const blob = await pdf((
            <HtmlToPdf
                power={power}
                power2={power2}
                fan={fan}
                rackmount={rackmount}
                ciscopn={ciscopn}
                description={descriprion}
                weight={wiight}
                dims={dims}

            />
        )).toBlob();
        saveAs(blob, 'ListOfMaterials.pdf');
};

export default generatePdfDocument;