function MainComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    return (
      <div>
        <button onClick={() => setIsModalOpen(true)}>Bejelentkezés</button>
        {isModalOpen && <LoginModal />}
      </div>
    );
  }