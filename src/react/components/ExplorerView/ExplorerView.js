// @flow

import React from "react"

import { TreeView } from "../TreeView"
import { string, tree, deepMix } from "../../../tools"

import type { TreeViewProps } from "../TreeView"

type ExplorerViewProps = {
    updateModel: Object[] => void,
    name: string
} & TreeViewProps

export class ExplorerView extends React.PureComponent<void, ExplorerViewProps, void> {

    conf : Object = {
        css: {
            TreeView: "ExplorerView"
        },
        display: (item: Object) => <a>{ item[this.props.name] }</a>,
        sort: (a: Object, b: Object) =>
            !a[this.props.category] === !b[this.props.category] ? a[this.props.name].localeCompare(b[this.props.name]) :
            a[this.props.category] ? -1 : 1,
        key: (item: Object) : string => item[this.props.name],
        search: (input: string) => (i: Object) => string(i[this.props.name]).contains(input),
        strategies: {
            selection: ["modifiers"],
            click: ["unfold-on-selection"],
            fold: ["opener-control"]
        },
        dragndrop: {
            draggable: true,
            droppable: true,
            drop: (target: Object, item: Object, event: DragEvent) => {
                let updatedModel = tree(this.props.model, this.props.category).filter((e: Object) => this.props.selection.indexOf(e) < 0)
                if(target)
                    target[this.props.category] = [ ...target[this.props.category], ...this.props.selection ]
                else
                    updatedModel = [ ...updatedModel, ...this.props.selection ]
                this.props.updateModel(updatedModel)
            }
        }
    }

    render = () =>
        <TreeView { ...(deepMix(this.conf, this.props, true)) }></TreeView>
}