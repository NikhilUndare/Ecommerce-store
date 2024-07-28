

import { Product } from "@/types";
import {create} from "zustand"

interface PreviewModalStore {
    isOpen : boolean;
    data? : Product;
    onOpen : (data : Product) => void;
    onClose : () => void;
}

const PreviewModalStore = create<PreviewModalStore>((set) => ({
    isOpen : false,
    data : undefined,
    onOpen : (data: Product) => set({data , isOpen: true}),
    onClose : () => set({isOpen : false})
}));

export default PreviewModalStore