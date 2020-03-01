import React, { useState, useEffect } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Masonry } from "./styles";

import { Container } from "../../components/Grid";

import { data } from "../../data/portfolioData";

function Portfolio() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [works, setWorks] = useState([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setWorks(data);
  }, []);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <Container>
      <h1>Portfolio Page</h1>
      {console.log(idx)}

      <Masonry>
        {works.map(item => {
          return (
            <div
              onClick={() => {
                setIdx(item.id - 1);
                setModalIsOpen(true);
              }}
            >
              <img src={item.source} />
              <span>{item.description}</span>
            </div>
          );
        })}
      </Masonry>

      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={() => toggleModal()}>
            <Carousel currentIndex={idx} views={works} />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  );
}
export default Portfolio;
