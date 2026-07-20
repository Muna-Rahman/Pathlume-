"use client";

import { Modal } from "@/components/ui/Modal.js";
import { Button } from "@/components/ui/Button.js";

export function DeleteConfirmModal({ open, onClose, onConfirm, isDeleting, title }) {
  return (
    <Modal open={open} onClose={onClose} title="Delete this opportunity?">
      <p className="text-sm text-ink-muted">
        {title ? <>You're about to permanently delete <strong className="text-ink">{title}</strong>.</> : "This action cannot be undone."}
      </p>
      <div className="mt-5 flex gap-3">
        <Button variant="danger" size="sm" loading={isDeleting} onClick={onConfirm}>
          Delete
        </Button>
        <Button variant="ghost" size="sm" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
}
