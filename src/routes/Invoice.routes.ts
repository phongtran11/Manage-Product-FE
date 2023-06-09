import { CreateInvoice, EditInvoice, InvoiceList } from "@/pages/Invoice";
import { TRoute } from "../types";
import { InvoicePaths } from "./path";

export const InvoiceRoutes: TRoute[] = [
  {
    path: InvoicePaths.LIST,
    component: InvoiceList,
  },

  {
    path: InvoicePaths.CREATE,
    component: CreateInvoice,
  },
  {
    path: InvoicePaths.EDIT,
    component: EditInvoice,
  },
];
