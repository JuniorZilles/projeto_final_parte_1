/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const checkDefaultRentalCarFormat = (body): void => {
  expect(body).toEqual({
    _id: expect.any(String),
    id_carro: expect.any(String),
    id_locacao: expect.any(String),
    id_locadora: expect.any(String),
    placa: expect.any(String),
    status: expect.any(String)
  });
};

export const checkDefaultRentalsCarFormat = (body): void => {
  expect(body).toEqual({
    frota: expect.arrayContaining([
      {
        _id: expect.any(String),
        id_carro: expect.any(String),
        id_locacao: expect.any(String),
        id_locadora: expect.any(String),
        placa: expect.any(String),
        status: expect.any(String)
      }
    ]),
    limit: expect.any(Number),
    offset: expect.any(Number),
    offsets: expect.any(Number),
    total: expect.any(Number)
  });
};
