import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px;
`;

const TrelloList = ({title, cards, listID, index}) => {
    console.log(cards);
    return(
        <Draggable draggableId={String(listID)} index={index}>
            {(provided) => (
                <ListContainer
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Droppable droppableId={String(listID)} type="card">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <h4>{title}</h4>
                                {cards.map((card, index) => (
                                    <TrelloCard
                                        id={card.id}
                                        index={index}
                                        key={card.id}
                                        text={card.text}
                                        listID={listID}
                                    />
                                ))}
                                {provided.placeholder} {/* これは何？ */}
                                <TrelloActionButton listID={listID} list={false} />
                            </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>
    );
}

export default TrelloList;