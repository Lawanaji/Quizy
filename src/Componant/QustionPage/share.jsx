import React from 'react';

const ShareModal = ({ showModal, closeModal, handleShareResults }) => {
    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[300px]">
                <h2 className="text-xl font-bold mb-4 text-center">Share Your Results</h2>
                <div className="flex flex-col space-y-4">
                    <button
                        className="px-4 py-2 text-white bg-blue-500 rounded-lg"
                        onClick={() => handleShareResults('twitter')}
                    >
                        Share on Twitter
                    </button>
                    <button
                        className="px-4 py-2 text-white bg-blue-800 rounded-lg"
                        onClick={() => handleShareResults('facebook')}
                    >
                        Share on Facebook
                    </button>
                    <button
                        className="px-4 py-2 text-white bg-blue-700 rounded-lg"
                        onClick={() => handleShareResults('linkedin')}
                    >
                        Share on LinkedIn
                    </button>
                </div>
                <button
                    className="mt-6 w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ShareModal;
