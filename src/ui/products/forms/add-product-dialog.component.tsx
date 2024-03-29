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

export function AddProductDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Add Product</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>Fill out the details for your new Product.</DialogDescription>
        </DialogHeader>
        <AddProductForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
