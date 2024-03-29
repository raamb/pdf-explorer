import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import '../styles/Reader.css';
import { useCallback, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import { useFileReaderContext } from '../contexts/file-reader-context';
import type { PDFDocumentProxy } from 'pdfjs-dist';

 pdfjs.GlobalWorkerOptions.workerSrc = 
 `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//  'pdfjs-dist/build/pdf.worker.min.js',
//  import.meta.url,
//).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};

const maxWidth = 800;

export const Reader = () => {
  const { fileLink, setFileLink } = useFileReaderContext();
  const [numPages, setNumPages] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);


  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    console.log(new URL('pdfjs-dist/build/pdf.worker.min.js',import.meta.url).toString())
    setNumPages(nextNumPages);
  }

  return (
    <div className="Example">
      <div className="Example__container">
         {/* <div className="Example__container__load">
            <label htmlFor="file">Load from file:</label>{' '}
            <input onChange={onFileChange} type="file" />
         </div>
        */}
        <div className="Example__container__document" ref={setContainerRef}>
          <Document file={fileLink} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}