import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export function DndListItem<T extends { id: string }>({
  item,
  renderItem,
}: {
  item: T;
  renderItem: (
    item: T,
    handleProps: Record<string, unknown>,
  ) => React.ReactNode;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleProps = {
    ref: setActivatorNodeRef,
    ...listeners,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      {renderItem(item, handleProps)}
    </div>
  )
}
