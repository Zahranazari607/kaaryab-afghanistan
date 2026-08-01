"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { opportunities as initialOpportunities } from "../data/opportunities";

const SavedContext = createContext();

export function SavedProvider({ children }) {
  const [savedItems, setSavedItems] = useState([]);
  const [allOpportunities, setAllOpportunities] = useState([]);

  useEffect(() => {
    const storedOps = localStorage.getItem("kaaryab_opportunities");
    
    if (storedOps) {
      try {
        const parsedStored = JSON.parse(storedOps);
        
        const newItemsFromData = initialOpportunities.filter(
          (initOp) => !parsedStored.some((storedOp) => storedOp.id === initOp.id)
        );

        const mergedOps = [...parsedStored, ...newItemsFromData];
        
        setAllOpportunities(mergedOps);
        localStorage.setItem("kaaryab_opportunities", JSON.stringify(mergedOps));
      } catch (e) {
        console.error("Error parsing stored opportunities", e);
        setAllOpportunities(initialOpportunities);
        localStorage.setItem("kaaryab_opportunities", JSON.stringify(initialOpportunities));
      }
    } else {
      setAllOpportunities(initialOpportunities);
      localStorage.setItem("kaaryab_opportunities", JSON.stringify(initialOpportunities));
    }

    const storedSaved = localStorage.getItem("kaaryab_saved");
    if (storedSaved) {
      try {
        setSavedItems(JSON.parse(storedSaved));
      } catch (e) {
        console.error("Error parsing saved items", e);
      }
    }
  }, []);

  const toggleSave = (opportunity) => {
    let updated;
    if (savedItems.some(item => item.id === opportunity.id)) {
      updated = savedItems.filter(item => item.id !== opportunity.id);
    } else {
      updated = [...savedItems, opportunity];
    }
    setSavedItems(updated);
    localStorage.setItem("kaaryab_saved", JSON.stringify(updated));
  };

  const addOpportunity = (newOp) => {
    const updated = [newOp, ...allOpportunities];
    setAllOpportunities(updated);
    localStorage.setItem("kaaryab_opportunities", JSON.stringify(updated));
  };

  const updateOpportunity = (id, updatedOp) => {
    const updated = allOpportunities.map(op => op.id === id ? { ...op, ...updatedOp } : op);
    setAllOpportunities(updated);
    localStorage.setItem("kaaryab_opportunities", JSON.stringify(updated));
  };

  const deleteOpportunity = (id) => {
    const updated = allOpportunities.filter(op => op.id !== id);
    setAllOpportunities(updated);
    localStorage.setItem("kaaryab_opportunities", JSON.stringify(updated));
    const updatedSaved = savedItems.filter(item => item.id !== id);
    setSavedItems(updatedSaved);
    localStorage.setItem("kaaryab_saved", JSON.stringify(updatedSaved));
  };

  return (
    <SavedContext.Provider value={{ 
      savedItems, 
      toggleSave, 
      allOpportunities, 
      addOpportunity, 
      updateOpportunity, 
      deleteOpportunity 
    }}>
      {children}
    </SavedContext.Provider>
  );
}

export const useSaved = () => useContext(SavedContext);
