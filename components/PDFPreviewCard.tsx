import { Eye, Download } from 'lucide-react';

export function PDFPreviewCard() {
  return (
    <div className="flex-1 flex items-center justify-center p-4 lg:p-8 relative">
      <div className="max-w-md w-full space-y-6">
        {/* Document Preview */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200">
          {/* Preview Image - First page of PDF */}
          <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 relative overflow-hidden max-h-[38vh] xl:max-h-[45vh]">
            {/* You would replace this with an actual preview image */}
            <img
              src="/images/MLFirstPage.png"
              alt="First page of Machine Learning traffic sign classification report showing model comparison table"
              className="w-full h-full object-cover object-top"
            />

            {/* Page indicator */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-full">
              5 pages
            </div>
          </div>

          {/* Document Info */}
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold text-neutral-800">
                Model Analysis & Comparison
              </h3>
              <p className="text-sm text-neutral-500">
                Supervised machine learning methods for traffic sign
                classification
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/pdfs/ML - A2 Report - Traffic Sign Prediction.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors font-medium"
              >
                <Eye className="w-4 h-4" />
                View PDF
              </a>

              <a
                href="/pdfs/ML - A2 Report - Traffic Sign Prediction.pdf"
                download
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors font-medium"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
