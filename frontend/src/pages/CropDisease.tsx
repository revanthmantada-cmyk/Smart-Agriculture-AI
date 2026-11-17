import React, { useRef, useState } from 'react';

function CropDisease() {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    setError('');

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5 MB.');
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
      setFileName(file.name);
    };

    reader.onerror = () => {
      setError('Unable to read this image. Please try again.');
    };

    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImage(null);
    setFileName('');
    setError('');

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-6">

      {/* Heading */}
      <div>
        <p className="text-sm font-medium text-green-700">
          AGRICULTURE / CROP DIAGNOSTICS
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-800">
          Crop Disease Detection
        </h1>

        <p className="mt-2 text-slate-500">
          Upload a crop leaf image to prepare it for AI-powered disease analysis.
        </p>
      </div>

      {/* Information card */}
      <div className="p-5 border border-green-200 bg-green-50 rounded-2xl">
        <h3 className="font-semibold text-green-900">
          🌿 How it works
        </h3>

        <p className="mt-2 text-sm leading-6 text-green-800">
          Upload a clear photograph of a crop leaf. The image will be
          prepared for analysis. Disease predictions will become available
          after integration with a trained machine learning model.
        </p>
      </div>

      {/* Upload section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">

          <h2 className="text-lg font-bold text-slate-800">
            Upload Crop Image
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Supported formats: JPG, JPEG, PNG, WEBP. Maximum size: 5 MB.
          </p>

          <div className="mt-6">

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleImageUpload}
              className="hidden"
              id="crop-image"
            />

            <label
              htmlFor="crop-image"
              className="flex flex-col items-center justify-center p-10 text-center border-2 border-dashed border-green-300 rounded-2xl bg-green-50 cursor-pointer hover:bg-green-100 transition"
            >
              <span className="text-5xl">📷</span>

              <span className="mt-4 font-semibold text-green-800">
                Click to upload crop image
              </span>

              <span className="mt-2 text-sm text-slate-500">
                Select an image from your device
              </span>
            </label>

          </div>

          {error && (
            <p className="mt-4 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          {image && (
            <div className="mt-5">
              <p className="font-medium text-slate-700">
                Selected file: {fileName}
              </p>

              <button
                onClick={removeImage}
                className="mt-3 px-4 py-2 text-sm text-red-600 border border-red-200 rounded-lg hover:bg-red-50"
              >
                Remove Image
              </button>
            </div>
          )}

        </div>

        {/* Preview */}
        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">

          <h2 className="text-lg font-bold text-slate-800">
            Image Preview
          </h2>

          <div className="flex items-center justify-center mt-5 min-h-72 bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden">

            {image ? (
              <img
                src={image}
                alt="Uploaded crop leaf preview"
                className="max-h-80 w-full object-contain"
              />
            ) : (
              <div className="text-center">
                <span className="text-5xl">🌱</span>

                <p className="mt-3 text-sm text-slate-500">
                  Your uploaded image will appear here.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Analysis status */}
      <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">

        <h2 className="text-lg font-bold text-slate-800">
          Disease Analysis
        </h2>

        <div className="p-5 mt-4 bg-amber-50 border border-amber-200 rounded-xl">

          <p className="font-semibold text-amber-800">
            Analysis model not connected
          </p>

          <p className="mt-2 text-sm leading-6 text-amber-700">
            Your image upload and preview are ready. A trained crop disease
            detection model must be connected before actual predictions
            can be generated.
          </p>

        </div>

      </div>

    </div>
  );
}

export default CropDisease;