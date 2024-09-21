import { useState, useEffect } from "react";
import ExpertCards from "../components/Cards/ExpertCards";
import Layout from "./Layout";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Modal from "../components/Modal/Modal";

interface Card {
  _id: string;
  title: string;
  content: string;
}

function ExpertCard() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCards = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/expertise-cards"
      );
      setCards(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch cards");
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/expertise-cards/${id}`);
      setCards(cards.filter((card: { _id: string }) => card._id !== id));
      toast.success("Card deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete card");
    }
  };

  return (
    <div className="flex gap-4">
      <Toaster position="top-right" />
      <Layout />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        <ExpertCards
          cards={cards}
          onDelete={handleDelete}
          onReadMore={(card) => {
            setSelectedCard(card);
            setIsModalOpen(true);
          }}
        />
      </div>

      {isModalOpen && selectedCard && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedCard.title}
          content={selectedCard.content}
        />
      )}
    </div>
  );
}

export default ExpertCard;
