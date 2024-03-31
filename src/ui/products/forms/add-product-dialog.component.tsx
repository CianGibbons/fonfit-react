import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { AddProductForm } from './add-product-form.component';
import { useState } from 'react';
import { Table } from '@tanstack/react-table';

interface AddProductDialogProps<TData> {
  table: Table<TData>;
}

export function AddProductDialog<TData>({ table }: AddProductDialogProps<TData>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Add Product</Button>
      </DialogTrigger>
      <DialogContent className="h-auto min-h-[min-content]">
        <div className="mt-4 max-h-[70vh] sm:max-h-[50vh] px-[1px]  overflow-y-scroll scrollbar-track-transparent scrollbar-thumb-red-900 scrollbar-thin">
          {/* Extra Padding Right to account for potential scrollbar */}
          <div className="pr-4">
            <DialogHeader className="mb-4">
              <DialogTitle>Add Product</DialogTitle>
              <DialogDescription>Fill out the details for your new Product.</DialogDescription>
            </DialogHeader>
            <AddProductForm setIsOpen={setIsOpen} table={table} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
