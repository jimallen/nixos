#!/usr/bin/env bash

sudo cp home.nix /etc/nixos/home.nix
sudo nixos-rebuild switch --flake /etc/nixos#nixos-x1