/* eslint-disable react-refresh/only-export-components */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BACKEND_URL } from "../api";
// import { LOCALHOST_URL } from "../api";
import {
  AuthResponse,
  BiasResponse,
  ContextResponse,
  SurveyAnswerPayload,
  SurveyResponse,
  AuthPayload,
  ContextPayload,
  AttitudeResponse,
  AttitudePayload,
  BiasPayload,
} from "./types";

export class ApiService<T, P> {
  private BASE_URL: string;
  private ENDPOINT: string;
  private ADDITIONAL_URL: string | undefined;
  private TOKEN: string | null;

  constructor(endpoint: string, additionalUrl?: string) {
    this.BASE_URL = BACKEND_URL;
    this.ENDPOINT = endpoint;
    this.ADDITIONAL_URL = additionalUrl;
    this.TOKEN = localStorage.getItem("moral-token");
  }

  private async request<R>(config: AxiosRequestConfig): Promise<R> {
    try {
      const response: AxiosResponse<R> = await axios(config);
      return response.data;
    } catch (error) {
      // Handle error (e.g., log, throw, etc.)
      throw new Error("Failed to fetch data");
    }
  }

  public async getAll(): Promise<T> {
    return this.request<T>({
      method: "GET",
      url: `${this.BASE_URL}/${this.ENDPOINT}`,
      headers: {
        "auth-token": this.TOKEN,
      },
    });
  }

  public async getById(id: string): Promise<T> {
    return this.request<T>({
      method: "GET",
      url: `${this.BASE_URL}/${this.ENDPOINT}/${id}`,
      headers: {
        "auth-token": this.TOKEN,
      },
    });
  }

  public async post(payload: P): Promise<T> {
    try {
      // Send the POST request using axios
      let url;
      if (this.ADDITIONAL_URL) {
        url = `${this.BASE_URL}/${this.ENDPOINT}/${this.ADDITIONAL_URL}`;
      } else {
        url = `${this.BASE_URL}/${this.ENDPOINT}`;
      }

      const headers = {
        "auth-token": this.TOKEN,
      };

      const response: AxiosResponse<T> = await axios.post<T>(url, payload, {
        headers: headers,
      });

      // Return the response data
      return response.data;
    } catch (error: unknown) {
      console.log(error);
      // Handle errors appropriately
      throw new Error(`Failed to post data: ${error}`);
    }
  }

  public async put(payload: P): Promise<T> {
    try {
      // Send the POST request using axios
      let url;
      if (this.ADDITIONAL_URL) {
        url = `${this.BASE_URL}/${this.ENDPOINT}/${this.ADDITIONAL_URL}`;
      } else {
        url = `${this.BASE_URL}/${this.ENDPOINT}`;
      }

      const headers = {
        "auth-token": this.TOKEN,
      };

      const response: AxiosResponse<T> = await axios.put<T>(url, payload, {
        headers: headers,
      });

      // Return the response data
      return response.data;
    } catch (error: unknown) {
      console.log(error);
      // Handle errors appropriately
      throw new Error(`Failed to post data: ${error}`);
    }
  }

  public async delete(additonalUrl?: string): Promise<T> {
    try {
      // Send the POST request using axios
      let url;
      if (additonalUrl) {
        url = `${this.BASE_URL}/${this.ENDPOINT}/${additonalUrl}`;
      } else {
        url = `${this.BASE_URL}/${this.ENDPOINT}`;
      }

      const headers = {
        "auth-token": this.TOKEN,
      };

      const response: AxiosResponse<T> = await axios.delete<T>(url, {
        headers: headers,
      });

      // Return the response data
      return response.data;
    } catch (error: unknown) {
      console.log(error);
      // Handle errors appropriately
      throw new Error(`Failed to post data: ${error}`);
    }
  }

  public async uploadImage(id: string, file: File): Promise<T> {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const headers = {
        "auth-token": this.TOKEN,
        "Content-Type": "multipart/form-data",
      };

      const response: AxiosResponse<T> = await axios.put<T>(
        `${this.BASE_URL}/${this.ENDPOINT}/image/${id}`,
        formData,
        { headers }
      );

      return response.data;
    } catch (error: unknown) {
      console.error(error);
      throw new Error("Failed to upload image");
    }
  }
}

export const biasService = new ApiService<BiasResponse, BiasPayload>("bias");
export const contextService = new ApiService<ContextResponse, ContextPayload>(
  "context"
);
export const surveyUserService = new ApiService<
  SurveyResponse,
  SurveyAnswerPayload
>("surveyUser");
export const authService = new ApiService<AuthResponse, AuthPayload>("auth");
export const authLoginService = new ApiService<AuthResponse, AuthPayload>(
  "auth",
  "signin"
);
export const attitudeService = new ApiService<
  AttitudeResponse,
  AttitudePayload
>("attitude");
