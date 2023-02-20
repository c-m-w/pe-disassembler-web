# CMakeLists.txt

cmake_minimum_required(VERSION 3.10)
project(test-print)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED True)
set(CMAKE_CXX_FLAGS -m32)

add_executable(test-print test-print.cpp)
