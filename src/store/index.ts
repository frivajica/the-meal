import { atom } from "jotai";

import type { SelectedItem } from "../interfaces";

export const selectedItemsAtom = atom<SelectedItem[]>([]);
