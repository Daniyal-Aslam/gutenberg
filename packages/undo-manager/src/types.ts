export type HistoryChange = {
	from: any;
	to: any;
};

export type HistoryChanges = {
	id: string | Record< string, any >;
	changes: Record< string, HistoryChange >;
};

export type HistoryRecord = Array< HistoryChanges >;

export type UndoManager = {
	addRecord: ( record: HistoryRecord, isStaged: boolean ) => void;
	undo: () => void;
	redo: () => void;
	getUndoRecord: () => HistoryRecord;
	getRedoRecord: () => HistoryRecord;
};
