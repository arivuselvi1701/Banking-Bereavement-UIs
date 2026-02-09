import { useEffect, useState } from "react";

export function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [account, setAccount] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [requestType, setRequestType] = useState("");
  const [validating, setValidating] = useState(false);
  const [caseStep, setCaseStep] = useState(0);
  const [caseLoading, setCaseLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [aiVerifying, setAiVerifying] = useState(false);
  const [documentFile, setDocumentFile] = useState(null);

  const caseSteps = [
    "Customer validation",
    "Document upload",
    "AI document verification",
    "Reference Generation",
    "Case Completed"
  ];

  useEffect(() => {
    if (!showForm) {
      setCaseStep(0);
      setShowSuccess(false);
      setAiVerifying(false);
      setValidating(false);
      setDocumentFile(null);
      setAccount("");
      setCustomerName("");
      setRequestType("");
    }
  }, [showForm]);

  useEffect(() => {
    if (caseStep === 2 && !aiVerifying) {
      handleStartAIVerification();
    }
  }, [caseStep]);

  function handleValidate() {
    if (!account.trim() || !/^[0-9]+$/.test(account)) {
      alert("Please enter a valid account number (digits only).");
      return;
    }
    if (!customerName.trim()) {
      alert("Please enter the customer's name.");
      return;
    }
    if (!requestType) {
      alert("Please select a request type.");
      return;
    }

    setValidating(true);
    setTimeout(() => {
      setValidating(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setCaseStep(1);
      }, 2000);
    }, 2000);
  }

  function handleDocumentUpload(e) {
    const file = e.target.files[0];
    if (file) {
      setDocumentFile(file);
      setCaseLoading(true);
      setTimeout(() => {
        setCaseLoading(false);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setCaseStep(2);
        }, 2000);
      }, 1500);
    }
  }

  function handleStartAIVerification() {
    setAiVerifying(true);
    setTimeout(() => {
      setAiVerifying(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setCaseStep(3);
      }, 2000);
    }, 3000);
  }

  function handleBack() {
    if (caseStep > 0) {
      setCaseStep(caseStep - 1);
      setShowSuccess(false);
      setAiVerifying(false);
      setDocumentFile(null);
    }
  }

  return (
    <>
      {/* Breadcrumb Navigation Bar */}
      <div className="bg-[#4a2a7a] text-white py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <a href="#" className="hover:text-white/80 transition-colors underline">Personal</a>
          <span>&gt;</span>
          <a href="#" className="hover:text-white/80 transition-colors underline">Life Moments</a>
          <span>&gt;</span>
          <span>What to do when someone dies</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#5a3a8a] text-white py-20 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bereavement Guide Label */}
          <p className="text-base font-medium text-white/90 mb-6">Your Bereavement Case AI Assistant</p>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight max-w-none whitespace-nowrap overflow-hidden">
            Standing With You in Every Step Forward
          </h1>

          {/* Intro paragraph */}
          <p className="mt-8 text-lg md:text-xl text-white/90 max-w-4xl">
            Losing someone close to you is never easy. We're here to help you through every step of dealing with their banking.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#5a3a8a] font-semibold rounded-md shadow hover:bg-gray-100 transition-colors"
              aria-label="Start Bereavement Case"
            >
              Start Bereavement Case
            </button>
          </div>

          {/* Reveal form and progress when CTA clicked */}
          {showForm && (
            <div className="mt-10 bg-white rounded-lg p-6 text-gray-900 shadow">
              {/* Case Processing Status - horizontal stepper */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg sticky top-6 z-10">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Case Processing Status</h4>
                <div className="max-w-4xl mx-auto">
                  <div className="w-full">
                    {(() => {
                      const cols = caseSteps.length * 2 - 1;
                      return (
                        <>
                          <div
                            className="grid items-center w-full"
                            style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
                          >
                            {Array.from({ length: cols }).map((_, i) => {
                              if (i % 2 === 0) {
                                const idx = i / 2;
                                return (
                                  <div key={i} className="flex justify-center">
                                    <div
                                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                                        idx < caseStep
                                          ? "bg-green-500 text-white"
                                          : idx === caseStep
                                          ? "bg-[#5a3a8a] text-white"
                                          : "bg-gray-200 text-gray-600"
                                      }`}
                                    >
                                      {idx < caseStep ? "✓" : idx + 1}
                                    </div>
                                  </div>
                                );
                              }

                              // connector cell between steps
                              const leftIdx = (i - 1) / 2;
                              return (
                                <div key={i} className="flex items-center px-2">
                                  <div className="w-full h-1 bg-gray-200 rounded overflow-hidden">
                                    <div
                                      className="h-1 bg-[#5a3a8a] rounded"
                                      style={{ width: leftIdx < caseStep ? "100%" : "0%" }}
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          <div
                            className="grid mt-2 w-full"
                            style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
                          >
                            {Array.from({ length: cols }).map((_, i) => {
                              if (i % 2 === 0) {
                                const idx = i / 2;
                                return (
                                  <div key={`label-${i}`} className="flex justify-center">
                                    <div className={`text-xs ${idx <= caseStep ? "text-gray-900" : "text-gray-400"} text-center max-w-xs`}>{caseSteps[idx]}</div>
                                  </div>
                                );
                              }
                              return <div key={`sp-${i}`} />;
                            })}
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>
              </div>

              {/* Success Notification */}
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">✓ Step completed successfully!</p>
                </div>
              )}

              {/* Step 1: Customer Validation Form */}
              {caseStep === 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Enter the customer's details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <label className="flex flex-col">
                      <span className="text-sm font-medium mb-2">Account number</span>
                      <input
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2"
                        placeholder="e.g. 12345678"
                      />
                    </label>

                    <label className="flex flex-col">
                      <span className="text-sm font-medium mb-2">Customer name</span>
                      <input
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2"
                        placeholder="Full name"
                      />
                    </label>

                    <label className="flex flex-col">
                      <span className="text-sm font-medium mb-2">Request type</span>
                      <select
                        value={requestType}
                        onChange={(e) => setRequestType(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 bg-white"
                      >
                        <option value="">Select</option>
                        <option value="account-freeze">Account Freeze</option>
                        <option value="bereavement">Bereavement</option>
                      </select>
                    </label>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleValidate}
                      className="px-8 py-3 bg-[#5a3a8a] text-white font-semibold rounded-md hover:bg-[#4a2a7a] transition h-12 flex items-center justify-center"
                      disabled={validating}
                    >
                      {validating ? "Validating..." : "Validate Account"}
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Document Upload */}
              {caseStep === 1 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Upload Document</h3>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-8">
                    <input
                      type="file"
                      id="document-upload"
                      className="hidden"
                      onChange={handleDocumentUpload}
                      disabled={caseLoading}
                    />
                    <label htmlFor="document-upload" className="cursor-pointer inline-block">
                      <button
                        type="button"
                        className="px-8 py-3 bg-[#5a3a8a] text-white font-semibold rounded-md hover:bg-[#4a2a7a] transition h-12 flex items-center justify-center"
                        disabled={caseLoading}
                      >
                        {caseLoading ? "Uploading..." : "Upload Document"}
                      </button>
                    </label>
                    {documentFile && (
                      <p className="mt-4 text-sm text-gray-600">File: {documentFile.name}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleBack}
                      className="px-6 py-3 border-2 border-[#5a3a8a] bg-white text-[#5a3a8a] font-medium rounded-md hover:bg-gray-50 transition h-12 flex items-center justify-center"
                    >
                      Back
                    </button>

                    <button
                      onClick={() => {
                        setShowSuccess(true);
                        setTimeout(() => {
                          setShowSuccess(false);
                          setCaseStep(2);
                        }, 2000);
                      }}
                      className="px-8 py-3 bg-[#5a3a8a] text-white font-semibold rounded-md hover:bg-[#4a2a7a] transition h-12 flex items-center justify-center"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: AI Document Verification */}
              {caseStep === 2 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">AI Document Verification</h3>
                  
                  <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="animate-spin h-5 w-5 border-2 border-[#5a3a8a] border-t-transparent rounded-full"></div>
                      <p className="text-blue-900 font-medium">
                        AI is verifying the document...
                      </p>
                    </div>
                    <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                      <div className="h-2 bg-[#5a3a8a] animate-pulse rounded-full" style={{ width: "100%" }} />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleBack}
                      className="px-6 py-3 border-2 border-[#5a3a8a] bg-white text-[#5a3a8a] font-medium rounded-md hover:bg-gray-50 transition h-12 flex items-center justify-center"
                    >
                      Back
                    </button>

                    <button
                      onClick={() => {
                        setShowSuccess(true);
                        setTimeout(() => {
                          setShowSuccess(false);
                          setCaseStep(3);
                        }, 2000);
                      }}
                      disabled={aiVerifying}
                      className="px-8 py-3 bg-[#5a3a8a] text-white font-semibold rounded-md hover:bg-[#4a2a7a] disabled:opacity-50 transition h-12 flex items-center justify-center"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4+: Remaining Steps (Reference Generation and beyond) */}
              {caseStep >= 3 && caseStep < caseSteps.length && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">{caseSteps[caseStep]}</h3>
                  <p className="text-gray-600 mb-6">Processing your case...</p>

                  <div className="flex items-center justify-start gap-3">
                    <button
                      onClick={handleBack}
                      className="px-6 py-3 border-2 border-[#5a3a8a] bg-white text-[#5a3a8a] font-medium rounded-md hover:bg-gray-50 transition h-12 flex items-center justify-center"
                    >
                      Back
                    </button>

                    <button
                      onClick={() => {
                        setCaseLoading(true);
                        setTimeout(() => {
                          setCaseLoading(false);
                          setShowSuccess(true);
                          setTimeout(() => {
                            setShowSuccess(false);
                            setCaseStep(caseStep + 1);
                          }, 1000);
                        }, 1800);
                      }}
                      disabled={caseLoading}
                      className="px-8 py-3 bg-[#5a3a8a] text-white font-semibold rounded-md hover:bg-[#4a2a7a] disabled:opacity-50 transition h-12 flex items-center justify-center"
                    >
                      {caseLoading ? "Processing..." : "Next"}
                    </button>
                  </div>
                </div>
              )}

              {/* Completion Message */}
              {caseStep === caseSteps.length && (
                <div>
                  <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-bold text-lg">✓ Case processing completed successfully!</p>
                    <p className="text-green-700 mt-2">Your bereavement case is now complete.</p>
                  </div>

                  <div className="mt-4 flex items-center justify-start gap-3">
                    <button
                      onClick={() => setCaseStep(caseStep - 1)}
                      className="px-6 py-3 border-2 border-[#5a3a8a] bg-white text-[#5a3a8a] font-medium rounded-md hover:bg-gray-50 transition h-12 flex items-center justify-center"
                    >
                      Back
                    </button>

                    <button
                      onClick={() => {
                        setShowForm(false);
                      }}
                      className="px-8 py-3 bg-[#5a3a8a] text-white font-semibold rounded-md hover:bg-[#4a2a7a] transition h-12 flex items-center justify-center"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
