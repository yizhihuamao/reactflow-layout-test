import ELK from "elkjs/lib/elk.bundled.js";
import React, { useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  Panel,
  useNodesState,
  useEdgesState,
  useReactFlow,
  Position,
} from "reactflow";

import { initialNodes, initialEdges } from "./nodes-edges.js";
import "reactflow/dist/style.css";

const elk = new ELK();

const useLayoutedElements = () => {
  const { getNodes, setNodes, getEdges, fitView } = useReactFlow();
  const defaultOptions = {
    "elk.algorithm": "layered",
    // 'elk.layered.spacing.nodeNodeBetweenLayers': 100,
    // 'elk.spacing.nodeNode': 80,
    // "elk.direction": "DOWN",
    "elk.layered.spacing.edgeNodeBetweenLayers": "80",
    "elk.spacing.nodeNode": "100",
    "elk.layered.nodePlacement.strategy": "SIMPLE",
    "elk.separateConnectedComponents": "true",
    "elk.spacing.componentComponent": "150",
  };
  const handleNodes = useCallback(
    (direction) => {
      return getNodes().map((o) => {
        // delete o.style;
        return {
          ...o,
          targetPosition: direction === "RIGHT" ? Position.Left : Position.Top, // 如果是 LR，目标位置在左侧，否则在顶部
          sourcePosition:
            direction === "RIGHT" ? Position.Right : Position.Bottom, // 如果是 LR，源位置在右侧，否则在底部
          // style: {
          //     width: Number(o.width),
          //     height: Number(o.height)
          // }
        };
      });
    },
    [getNodes]
  );
  const getLayoutedElements = useCallback((options) => {
    const layoutOptions = { ...defaultOptions, ...options };

    const graph = {
      id: "root",
      layoutOptions: layoutOptions,
      children: handleNodes(options["elk.direction"]),
      edges: getEdges(),
    };

    elk.layout(graph).then(({ children }) => {
      // By mutating the children in-place we saves ourselves from creating a
      // needless copy of the nodes array.
      children.forEach((node) => {
        node.position = { x: node.x, y: node.y };
      });

      setNodes(children);
      window.requestAnimationFrame(() => {
        fitView();
      });
    });
  }, []);

  return { getLayoutedElements };
};

const LayoutFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const { getLayoutedElements } = useLayoutedElements();

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
    >
      <Panel position="top-right">
        <button
          onClick={() =>
            getLayoutedElements({
              "elk.algorithm": "layered",
              "elk.direction": "DOWN",
            })
          }
        >
          vertical layout
        </button>
        <button
          onClick={() =>
            getLayoutedElements({
              "elk.algorithm": "layered",
              "elk.direction": "RIGHT",
            })
          }
        >
          horizontal layout
        </button>
        <button
          onClick={() =>
            getLayoutedElements({
              "elk.algorithm": "org.eclipse.elk.radial",
            })
          }
        >
          radial layout
        </button>
        <button
          onClick={() =>
            getLayoutedElements({
              "elk.algorithm": "org.eclipse.elk.force",
            })
          }
        >
          force layout
        </button>
      </Panel>
    </ReactFlow>
  );
};

export default function () {
  return (
    <ReactFlowProvider>
      <LayoutFlow />
    </ReactFlowProvider>
  );
}
