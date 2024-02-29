import { DndListItem } from './DndListItem';
import { DndContext, DragEndEvent, KeyboardSensor, PointerSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useCallback, useState } from 'react';

export function DndList<T extends { id: string }>({
  items,
  renderItem,
  onDragEnd,
  className,
}: {
  items: T[];
  renderItem: (
    item: T,
    handleProps: Record<string, unknown>,
  ) => React.ReactNode;
  onDragEnd: (oldIndex: number, newIndex: number) => void;
  className?: string;
}) {
  const [isDragging, setDragging] = useState(false);

  const handleDragStart = useCallback(() => {
    setDragging(true);
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    setDragging(false);

    const {active, over} = event;
    if (over == null) { return; }

    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id)
      onDragEnd(oldIndex, newIndex);
    }
  }, [items, onDragEnd]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={[
        restrictToVerticalAxis,
      ]}
    >
      <SortableContext
        items={items}
        strategy={verticalListSortingStrategy}
      >
        <div className={className}>
          {items.map((item, i) => (
            <DndListItem
              key={isDragging ? item.id : i}
              item={item}
              renderItem={renderItem}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
