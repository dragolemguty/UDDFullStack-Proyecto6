const Guest = require('../models/guest'); // Importamos el modelo de Guest

// Crear invitados (guests) y guardarlos en la base de datos (solo si es necesario para inicializar)
const createInitialGuests = async (req, res) => {
  try {
    const guestsData = [
      {
        id_guest: 1,
        guest_name: 'JuanJo',
        guest_lastname: 'Gutierrez',
        gender: 'M',
        birth_date: '1995-10-27',
        contact_number: null,
        DNI_number: null,
        guest_adress: null,
        register_date: '2024-07-12',
        guest_rank: 'Standard',
        guest_details: null
      },
      {
        id_guest: 2,
        guest_name: 'Daniela',
        guest_lastname: 'Lopez',
        gender: 'F',
        birth_date: '1991-10-24',
        contact_number: null,
        DNI_number: null,
        guest_adress: null,
        register_date: '2024-07-12',
        guest_rank: 'VIP',
        guest_details: null
      },
      {
        id_guest: 3,
        guest_name: 'Constanza',
        guest_lastname: 'Ferreyra',
        gender: 'NB',
        birth_date: '2003-04-21',
        contact_number: null,
        DNI_number: null,
        guest_adress: null,
        register_date: '2024-07-12',
        guest_rank: 'Aspiracional',
        guest_details: null
      }
    ];

    // Insertamos los invitados en la base de datos
    const guests = await Guest.insertMany(guestsData);
    res.json({ ok: true, description: 'Invitados creados correctamente', guests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creando los invitados' });
  }
};

// Obtener todos los invitados
const findAllGuests = async (req, res) => {
  try {
    const guests = await Guest.find({});
    res.json({ guests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error obteniendo los invitados' });
  }
};

// Obtener un invitado por ID
const findGuestById = async (req, res) => {
  try {
    const guest = await Guest.findById(req.params.id);
    if (guest) {
      res.json(guest);
    } else {
      res.status(404).json({ ok: false, description: 'No se encontró el invitado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error obteniendo el invitado' });
  }
};

// Actualizar un invitado
const updateGuest = async (req, res) => {
  try {
    const { guest_name, guest_lastname, gender, birth_date, contact_number, DNI_number, guest_adress, register_date, guest_rank, guest_details } = req.body;

    const updatedGuest = await Guest.findByIdAndUpdate(req.params.id, {
      guest_name,
      guest_lastname,
      gender,
      birth_date,
      contact_number,
      DNI_number,
      guest_adress,
      register_date,
      guest_rank,
      guest_details
    }, { new: true });

    if (updatedGuest) {
      res.json(updatedGuest);
    } else {
      res.status(404).json({ ok: false, description: 'No se encontró el invitado para actualizar' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error actualizando el invitado' });
  }
};

// Eliminar un invitado
const deleteGuest = async (req, res) => {
  try {
    const deletedGuest = await Guest.findByIdAndDelete(req.params.id);
    
    if (deletedGuest) {
      res.json({ ok: true, description: 'Invitado eliminado correctamente' });
    } else {
      res.status(404).json({ ok: false, description: 'No se encontró el invitado para eliminar' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error eliminando el invitado' });
  }
};

module.exports = { createInitialGuests, findAllGuests, findGuestById, updateGuest, deleteGuest };
