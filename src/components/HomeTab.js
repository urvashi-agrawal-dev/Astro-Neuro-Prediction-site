import React from 'react';
import { CircleUser, ArrowUp } from 'lucide-react';

const HomeTab = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container px-4 py-12 mx-auto text-center">
        <header className="mb-12">
          <h1 className="text-6xl font-bold">OutReach</h1>
        </header>
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-5xl font-normal tracking-tight">
              Your Mails,
              <br />
              amplified
            </h2>
            <p className="text-xl text-gray-600">
              Privacy-first AI that helps you create in confidence.
            </p>
          </div>
          <div className="p-6 bg-gray-50 border border-gray-100 rounded-lg w-72 mx-auto">
            <div className="flex flex-col items-center gap-4">
              <button className="w-32 rounded-full border border-gray-300 py-2 px-4 text-gray-700 hover:bg-gray-100">
                Chat
              </button>
              <button className="w-32 rounded-full bg-black text-white hover:bg-black/90 py-2 px-4 flex items-center justify-center">
                <ArrowUp className="mr-2 h-4 w-4" />
                Upload
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#F9F7F4] p-8 rounded-lg mt-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 bg-[#EAE7E3] p-4 rounded-lg w-fit mx-auto">
              <CircleUser className="h-6 w-6" />
              <p className="text-gray-800">
                Identify code optimizations and performance improvements.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-600 mb-4">All set. Here's the optimized code:</p>
              <pre className="bg-[#1E1E1E] text-gray-300 p-4 rounded-lg overflow-x-auto">
                <code>
{`import random

class Neuron:
    def __init__(self, num_inputs):
        self.weights = [random.random() for _ in range(num_inputs)]
        self.bias = random.random()
    
    def activate(self, inputs):
        activation = sum(w * i for w, i in zip(self.weights, inputs))
        return 1 / (1 + math.exp(-activation))  # Sigmoid activation

class NeuralNetwork:
    def __init__(self, num_inputs, num_hidden, num_outputs):
        self.hidden_layer = [Neuron(num_inputs) for _ in range(num_hidden)]
`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
