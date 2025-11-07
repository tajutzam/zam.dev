"use client";
import React, { useEffect } from "react";

interface PDFViewerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PDFViewerModal({ isOpen, onClose }: PDFViewerModalProps) {
    useEffect(() => {
        if (isOpen) {
            const fileId = "1xrokGDbqT7mN3urH5q-BO87P8yQsS07H";
            const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;

            window.open(previewUrl, "_blank");

            onClose();
        }
    }, [isOpen, onClose]);

    return null;
}
