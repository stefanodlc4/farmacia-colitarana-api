import { Request, Response } from 'express';
import * as proveedorService from '../services/proveedor.service';
import { Proveedor } from '../entities/proveedor';

export const insertarProveedor = async (req: Request, res: Response) => {
    console.log('insertarProveedor')
    //const newProveedor: Proveedor = await
    const newProveedor: Proveedor
    res.json(newProveedor);
}
export const listarProveedor = async (req: Request, res: Response) => {
    const response = proveedorService.listarProveedor();
    res.json(response);
}

export const obtenerProveedor = async (req: Request, res: Response) => {
    const { idProveedor } = req.params;
    const response = proveedorService.obtenerProveedor(Number(idProveedor));
    res.json(response);
}

export const actualizarProveedor = async (req: Request, res: Response) => {
    const { idProveedor } = req.params;
    const proveedor = req.body;
    const response = proveedorService.actualizarProveedor(Number(idProveedor), proveedor)
    res.json(response);
}

export const darBajaProveedor = async (req: Request, res: Response) => {
    const { idProveedor } = req.params;
    const response = proveedorService.darBajaProveedor(Number(idProveedor));
    res.json(response);
}