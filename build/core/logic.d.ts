export declare class Core {
    constructor(inputs: {get: Function, set: Function}, outputs: Object, state: Object, refresh: () => void)
}

export declare class TreeNode<Item extends Object> extends Core {

    pending: Array<Item>

    /* Checks */

    isSelected:  (Item) => boolean
    isFolded:    (Item) => boolean
    hasChildren: (Item) => boolean
    isAsync:     (Item) => boolean
    isDisabled:  (Item) => boolean
    isDraggable: (Item) => boolean
    isDroppable: (Item) => boolean

    /* Styles */

    mixCss: (prop: string) => string
    ulCss: () => string
    liCss: (Item) => string

    /* Logic */

    /* Promises */
    unwrapPromise: (Item) => Promise<any>

    /* Events */
    onClick:        ((Item) => (MouseEvent) => string) | null
    onOpener:       ((Item) => (MouseEvent) => string) | null
    onDragStart:    ((Item) => (DragEvent) => string) | null
    onDragOver:     ((Item) => (DragEvent) => string) | null
    onDragEnter:    ((Item) => (DragEvent) => string) | null
    onDragLeave:    ((DragEvent) => string) | null
    onDrop:         ((Item) => (DragEvent) => string) | null

    dragGuard:      (Item) => boolean

    getDragEvents: (Item, boolean?) => {
        draggable:      boolean,
        onDragStart?:    (DragEvent) => string,
        onDragOver?:     (DragEvent) => string,
        onDragEnter?:    (DragEvent) => string,
        onDragLeave?:    (DragEvent) => string,
        onDrop?:         (DragEvent) => string,
    }
}

export declare class RootNode<Item extends Object> extends Core {

     defaultStrategies: {
        selectionStrategy,
        clickStrategy,
        foldStrategy
    }
    defaultAsync: (Function) => Promise<any>
    modifiers: Object

    mixCss: (prop: string) => string
    filterTree: (input: string) => (Array<Item> | null)

    /* Events */
    onKey: (KeyboardEvent) => void
    onSelect: (item: Item, ancestors: Array<Item>, neighbours: Array<Item>) => Array<Item>
    onDragStart: (target: Item, event: DragEvent, ancestors: Array<Item>, neighbours: Array<Item>) => void
    onDrop: (target: Item, event: DragEvent) => void

    wrapDragNDrop: () => {
        draggable: boolean,
        droppable: boolean,
        start?
        drop?,
        dragStart?,
        onDrop?
    }

}